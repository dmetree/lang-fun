<!-- TS: -->
  const [error, setError] = useState<string | null>(null)
  const [error, setError] = useState<string[]>([]) // array of strings

<!-- if different types of values  -->
  const [user, setUser] = useState<{name: string, age: number} | undefined>()

<!-- to make sure user exists -->
{ user && user.name}
{ user && user.age}

<!-- TS component -->
  const user: React.FC = () => {
      return <div>User</div>
  }

<!-- checkout html for more details -->
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
}