export interface Author {
  name: string;
  email?: string;
  url?: string;
  github?: string;
  twitter?: string;
}

const authorList: Author[] = [
  {
    name: "Steven",
    github: "boojack",
    twitter: "stevenx1ee",
  },
  {
    name: "Tianzhou",
    github: "tianzhou",
    twitter: "tianzhouchen",
  },
];

export default authorList;
