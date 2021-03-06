
type Album {
  id: ID!
  name: String
  released: Int
  artists: [Artist]
  bands: [Band]
  tracks: [Track]
  genres: [Genre]
  image: String
}