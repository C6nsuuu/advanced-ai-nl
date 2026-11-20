# Haalt de prompt-versies en de 12 inputs uit build/ en zet ze klaar voor run.py.
# Zo staat de testinvoer nooit twee keer met de hand opgeschreven.
import re, json, os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

d = {}
for l in open(f"{B}/test-set.md"):
    if not re.match(r"\| T\d\d \|", l): continue
    c = [x.strip() for x in l.split("|")]
    if c[1] in d: continue          # tweede tabel in test-set.md overslaan
    d[c[1]] = c[2].strip('"“”')
assert len(d) == 12, len(d)
json.dump(d, open(f"{os.path.dirname(__file__)}/inputs.json", "w"), ensure_ascii=False, indent=1)

# De bron staat maar op één plek: build/bronnen/. Hier gaat ze in de prompt.
BRON = open(f"{B}/bronnen/fod-btw-verbouwen.md").read().strip()
for src, dst in (("prompt.md", "prompt-v4.txt"), ("prompt-v3.md", "prompt-v3.txt"), ("prompt-v2.md", "prompt-v2.txt")):
    blk = re.search(r"```text\n(.*?)\n```", open(f"{B}/{src}").read(), re.S).group(1)
    assert "WERFOPNAME" in blk, src
    blk = blk.replace("[plak hier het bron-document]", BRON)
    open(f"{os.path.dirname(__file__)}/{dst}", "w").write(blk)
    print(dst, len(blk), "tekens")
print(len(d), "inputs")

# B01-B05 uit test-set-bron.md, alleen de rijen waar de vraag al ingevuld is.
b = {}
for l in open(f"{B}/test-set-bron.md"):
    c = [x.strip() for x in l.split("|")]
    if len(c) > 3 and re.fullmatch(r"B0\d", c[1]) and c[2]:
        b[c[1]] = c[2].strip('"“”')
if b:
    json.dump(b, open(f"{os.path.dirname(__file__)}/bron-inputs.json", "w"), ensure_ascii=False, indent=1)
print(len(b), "bron-inputs")
