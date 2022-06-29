interface IFavoritePlace {
  id: number
  title: string
  description: string
}

class FavoritePlace implements IFavoritePlace {
  id: number
  title: string
  description: string

  map(favoritePlaceInput: any): FavoritePlace {
    const d = favoritePlaceInput.data
    const att = d.attributes
    return new FavoritePlace(d.id, att.title, att.description)
  }

  constructor(id: number, title: string, description: string) {
    this.id = id
    this.title = title
    this.description = description
  }
}

export { FavoritePlace }
