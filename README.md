## Quickstart

```sh
pnpm dev
```

## Dependencies

## Building

To create a production version of your app:

```sh
pnpm build
```

You can preview the production build with `pnpm preview`.

## Assets

### Favicon

To regenerate `static/favicon.png` from `static/me.jpg` (grayscale, circular, cropped to face + torso):

```sh
magick static/me.jpg \
  -gravity North -crop 660x660+20+190 +repage \
  -colorspace Gray \
  -resize 64x64 \
  \( +clone -alpha extract \
  -fill black -colorize 100 \
  -fill white -draw "circle 32,32 32,0" \
  \) \
  -compose CopyOpacity -composite \
  static/favicon.png
```

Requires ImageMagick 7+ (`brew install imagemagick`). If you update `me.jpg`, the crop size (`660x660`, which controls zoom) and offsets (`+20+190`) may need adjustment depending on how the new photo is framed.
