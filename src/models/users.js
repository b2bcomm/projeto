const USERS = [
  {
    name: "Victor",
    cursos: ["Marketing"],
  },
  {
    name: "Dani",
    cursos: ["Fullstack", "Marketing"],
  },
  {
    name: "Jonatas",
    cursos: ["Fullstack", "Android", "Marketing"],
  },
  {
    name: "Anne",
    cursos: ["Fullstack", "Android", "Marketing"],
  },
  {
    name: "Gui",
    cursos: ["Fullstack", "Android", "Marketing"],
  },
  {
    name: "Willian",
    cursos: ["Fullstack", "Android", "Marketing"],
  },
];



const getAll = () => {
  return USERS
}

const getById = (id) => {
  return USERS[id]
}

module.exports = {
  getAll,
  getById
}