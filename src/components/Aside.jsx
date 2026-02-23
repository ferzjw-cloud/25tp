import { useState } from "react"
import { users } from "../services/mockApi.js"

const Aside = () => {
  const [search, setSearch] = useState("")

  const fetchingData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users")

      if (!response.ok) {
        alert("No se encuentra")
        return
      }

   const data = await response.json()

      setUsers(data.users)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(search.toLowerCase()))

  return (
    <aside>
      <h1>Chat UTN</h1>
      <input type="search" placeholder="Buscar contactos..." onChange={handleChange} />
      <ul>
        {
          filteredUsers.map((user) => (
            <li>
              {user.name}
              <small>{user.status}</small>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export { Aside }