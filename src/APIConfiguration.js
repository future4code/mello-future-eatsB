import React, { useState } from 'react';

const baseUrl = 
    "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB"

function APIConfiguration() {

    /* -----> LOGIN <----- */
    //State do Login
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");

    //Login
    const handleLogin = async() => {
        const body = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(`${baseUrl}/login`, body);
            localStorage.setItem("token", response.data.token)
            console.log(response.data.user)
        } catch(error) {
            console.log(error)
            alert("E-mail ou senha incorretos. Tente novamente.")
        }
    };

    /* -----> SIGNUP <----- */
    //State do Signup
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState(""); 

    //Signup
    const handleSignup = async() => {
        const body = {
            name: name,
            email: email,
            cpf: cpf,
            password: password,
        };

        try {
            const response = await axios.post(`${baseUrl}/signup`, body)
            console.log(response.data.user)
            localStorage.setItem("token", response.data.token)
            alert("Cadastro realizado com sucesso!")
        } catch(error) {
            console.log(error)
            alert("Não foi possível realizar o cadastro. Tente novamente.")
        }
    };
    
    /* -----> ADD ADDRESS <----- */
    //State do Add Address
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [neighbourhood, setNeighbourhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [complement, setComplement] = useState("");

    const token = localStorage.getItem("token");

    const addAddress = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        const body = {
            street: street,
            number: number,
            neighbourhood: neighbourhood,
            city: city,
            state: state,
            complement: complement, //todos os parâmetros são obrigatórios, menos o complement
        };

        try {
            const response = axios.put(`${baseUrl}/address`, axiosConfig, body)
            console.log(response.data.user)
            alert("Endereço cadastrado com sucesso!")
        } catch(error) {
            console.log(error)
            alert("Não foi possível cadastrar endereço.")
        }
    };

    /* -----> GET FULL ADDRESS <----- */
    //State do Get Full Address
    const [address, setAddress] = useState({})

    const token = localStorage.getItem("token");

    const getFullAddress = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        try {
            const response = axios.get(`${baseUrl}/profile/address`, axiosConfig)
            setAddress(response.data.address)
            console.log(response.data.address)
        } catch(error) {
            console.log(error)
        }
    };

    /* -----> GET PROFILE <----- */
    //State do Get Profile
    const [user, setUser] = useState({})

    const token = localStorage.getItem("token");

    const getProfile = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        try {
            const response = axios.get(`${baseUrl}/profile`, axiosConfig)
            setUser(response.data.user)
            console.log(response.data.user)
        } catch(error) {
            console.log(error)
        }
    };

    /* -----> UPDATE PROFILE <----- */
    //State do Update Profile
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newCpf, setNewCpf] = useState("");

    const token = localStorage.getItem("token");

    const updateProfile = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        const body = {
            name: newName,
            email: newEmail,
            cpf: newCpf,
        };

        try {
            const response = axios.put(`${baseUrl}/profile`, axiosConfig, body)
            console.log(response.data.user)
            alert("Cadastro atualizado com sucesso!")
        } catch(error) {
            console.log(error)
            alert("Não foi possível atualizar cadastro.")
        }
    };

    /* -----> GET RESTAURANTS <----- */
    // State do Get Restaurants
    const [restaurants, setRestaurants] = ({})

    const token = localStorage.getItem("token");

    const getRestaurants = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        try {
            const response = axios.get(`${baseUrl}/restaurants`, axiosConfig)
            setRestaurants(response.data.restaurants)
            console.log(response.data.restaurants)
        } catch(error) {
            console.log(error)
        }
    };

    /* -----> GET RESTAURANT DETAIL <----- */
    //State do Get Restaurant Detail
    const [products, setProducts] = useState([]);

    const token = localStorage.getItem("token");
    const restaurantId = useParams(); //isso deve estar nas rotas

    const getRestaurantDetail = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        try {
            const response = axios.get(`${baseUrl}/restaurants/${restaurantId}`, axiosConfig)
            setProducts(response.data.restaurant.products)
            console.log(response.data.restaurant.products)
        } catch(error) {
            console.log(error)
        }
    };

    /* -----> PLACE ORDER <----- */
    //State do Place Order
    const [id, setId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
 
    const token = localStorage.getItem("token");
    const restaurantId = useParams(); //isso deve estar nas rotas

    const placeOrder = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        const body = {
            products: [{
                id: id,
                quantity: quantity,
            }, {
                id: id,
                quantity:quantity,
            }],
            paymentMethod: paymentMethod,
        }

        try {
            const response = axios.post(`${baseUrl}/restaurants/${restaurantId}/order`, axiosConfig, body)
            console.log(response.data.order)
        } catch(error) {
            console.log(error)
        }
    };

    /* -----> GET ACTIVE ORDER <----- */
    //State do Get Active Order
    const [order, setOrder] = useState({});

    const token = localStorage.getItem("token");

    const getActiveOrder = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        try {
            const response = axios.get(`${baseUrl}/active-order`, axiosConfig)
            setOrder(response.data.order)
            console.log(response.data.order)
        } catch(error) {
            console.log(error)
        }
    };

    /* -----> ORDERS HISTORY <----- */
    //State do Orders History
    const [orders, setOrders] = useState([])

    const token = localStorage.getItem("token");

    const ordersHistory = () => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        };

        try {
            const response = axios.get(`${baseUrl}/orders/history`, axiosConfig)
            setOrders(response.data.orders)
            console.log(response.data.orders)
        } catch(error) {
            console.log(error)
        }
    };
    
}

export default APIConfiguration;
