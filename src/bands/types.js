
type Band {
  id: ID!
  name: String
  origin: String
  members: [Member]
  website: String
  genres: [Genre]
}
