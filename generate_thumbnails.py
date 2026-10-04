from PIL import Image, ImageDraw, ImageFont
import os

def create_thumb(filename, color, text):
    img = Image.new('RGB', (200, 150), color=color)
    d = ImageDraw.Draw(img)
    # Just draw text in the middle
    d.text((10, 60), text, fill=(255, 255, 255))
    img.save(filename)

os.makedirs('public/assets/images/pricing', exist_ok=True)

thumbs = {
    'windows-al.jpg': ('#6b7280', 'Aluminium\n2-track'),
    'windows-upvc.jpg': ('#374151', 'UPVC + Mesh'),
    'railing-ms.jpg': ('#4b5563', 'MS Railing'),
    'railing-ss.jpg': ('#9ca3af', 'SS Railing'),
    'railing-glass.jpg': ('#d1d5db', 'Glass Railing'),
    'floor-1.jpg': ('#f3f4f6', 'Basic Tile'),
    'floor-2.jpg': ('#e5e7eb', 'Standard Tile'),
    'floor-3.jpg': ('#d1d5db', 'Premium Tile'),
    'floor-4.jpg': ('#9ca3af', 'Luxury Granite'),
    'bath-1.jpg': ('#6b7280', 'Standard Bath'),
    'bath-2.jpg': ('#374151', 'Premium Bath'),
    'paint-1.jpg': ('#fee2e2', 'Tractor Emulsion'),
    'paint-2.jpg': ('#fef3c7', 'Premium Emulsion'),
    'paint-3.jpg': ('#dcfce3', 'Apcolite Premium'),
    'paint-4.jpg': ('#e0e7ff', 'Royale Luxury'),
    'ev-charger.jpg': ('#10b981', 'EV Charger'),
    'gas-line.jpg': ('#f59e0b', 'Copper Gas Line'),
    'solar-provision.jpg': ('#3b82f6', 'Solar Provision')
}

for name, (color, text) in thumbs.items():
    create_thumb(f'public/assets/images/pricing/{name}', color, text)
print("Thumbnails generated.")
