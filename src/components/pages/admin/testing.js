const url = CONTACT_URL;

function MessageList() {
    const [contactforms, setContactforms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [auth, setAuth] = useContext(AuthContext);

    const token = auth;
    
    const options = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(function () {
        async function fetchData() {
            try {
                const response = await fetch(url, options);
                setAuth(token);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setContactforms(json);
                    
                } else {
                    setError("An error has occurred");
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const config = {
        headers: {
            "Content-type": "application/json",
             "Authorization": `Bearer ${Cookies.get("jwt")}`,
        },
   };    
axios.get(`${BASE_URL}`, null, config)