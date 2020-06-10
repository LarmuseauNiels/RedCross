export class TileModel{
  image: string;
  title: string;
  selected: boolean;

  constructor(title: string, image: string) {
    this.image = image;
    this.title = title;
    this.selected = false;
}
}
