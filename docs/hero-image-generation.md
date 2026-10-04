# Matching hero images

Generated with the built-in image-generation tool on 2026-10-04. Both outputs are 1672 × 941. The finished image was created first; the structural image was edited directly from that output to preserve the viewpoint, silhouette, floor lines and scene. Original assets remain available.

Assets:
- `public/assets/images/hero/hero-finished-synced.webp`
- `public/assets/images/hero/hero-structure-synced.webp`

Both layers use identical sizing and positioning. Responsive cover sizing removes the side gutters, trimming surrounding scenery while retaining the entire building. The existing text layout, font families and sizes are unchanged.

## Finished-image prompt

Use case: precise-object-edit. Asset type: photorealistic construction website hero, FINISHED state of a precisely registered before/after image pair. Edit the supplied image into a wide 16:9 landscape photograph, ideally 2048x1152. Preserve the architectural identity and number of floors of the same building, with the complete rooftop and ground visible. Extend the surrounding sky, landscaped street and plaza naturally to both sides; do not add borders, solid gutters, overlay tints, UI, or captions. Frame the main building in the right half (roughly x=52% to 88%, y=12% to 88%), leaving the left 40% mainly soft pale sky and quiet distant landscaping for website text. Maintain a straight, coherent architectural perspective, crisp visible slab lines and vertical columns, soft daytime light. Keep the rooftop brand text legible as 'SUCI' with 'CONSTRUCTIONS' beneath, remove the unrelated 'AURORA PLAZA' signage. Full-bleed photographic scene to all four edges. This exact finished photograph will subsequently be edited into its unfinished concrete frame, so favor a clean rectilinear building with clear matching floor and column locations. Output ONE landscape image, not a diptych.

## Structural-image prompt

Use case: precise-object-edit. Edit target: the attached wide SUCI finished-building photograph. Create its UNFINISHED STRUCTURAL state for a pixel-registered before/after website lens reveal. Absolutely lock the image canvas, camera, perspective, building footprint, rooftop outline, every column position and every horizontal floor-slab edge to exactly the supplied photograph. NO shifting, resizing, zooming, reframing, changing floor count, or changing building shape. Remove only the building's glass, window mullions, finished cladding, signs and interior furniture to expose a realistic bare reinforced-concrete frame with dark open floor bays. Existing finished horizontal facade bands become the corresponding concrete slab edges IN THE SAME PIXEL LOCATIONS. Existing substantial vertical facade columns become concrete columns IN THE SAME PIXEL LOCATIONS. Retain the outline of both rooftop towers as bare concrete framing, without signage. No scaffolding or extra protruding rebar that changes the silhouette. Keep ALL non-building pixels visually identical: sky, clouds, trees, surrounding distant buildings, vehicles, pedestrians, cyclist, paving, shadows, landscaping and lighting. This must read as exactly the SAME building viewed by an unmoved camera, simply with the finishes removed. Preserve exact wide aspect ratio and resolution. No captions, border, tint, UI, or diptych; ONE image.
