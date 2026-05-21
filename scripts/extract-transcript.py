import json
import sys
from pathlib import Path

path = sys.argv[1]
target = sys.argv[2] if len(sys.argv) > 2 else ""
out_dir = Path(sys.argv[3]) if len(sys.argv) > 3 else None
latest: dict[str, str] = {}

for line in open(path, encoding="utf-8", errors="replace"):
    if target and target not in line:
        continue
    try:
        obj = json.loads(line)
    except json.JSONDecodeError:
        continue
    for part in obj.get("message", {}).get("content", []):
        if part.get("type") != "tool_use":
            continue
        inp = part.get("input", {})
        p = inp.get("path", "")
        if target and target not in p:
            continue
        if part.get("name") == "Write" and "contents" in inp:
            key = p.replace("\\", "/").split("/")[-1]
            latest[key] = inp["contents"]

if out_dir:
    out_dir.mkdir(parents=True, exist_ok=True)
    for name, content in latest.items():
        (out_dir / name).write_text(content, encoding="utf-8")
        print(f"wrote {name} ({len(content)} chars)")
else:
    for name, content in latest.items():
        sys.stdout.buffer.write(f"=== {name} ===\n".encode())
        sys.stdout.buffer.write(content.encode("utf-8"))
        sys.stdout.buffer.write(b"\n\n")
