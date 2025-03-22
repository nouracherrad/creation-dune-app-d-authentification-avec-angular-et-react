import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css"; 
import logo from "../assets/image/image.webp"; 

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:5000/users");
      const user = data.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("user", JSON.stringify(user)); 
        alert("Connexion réussie !");
        navigate("/dashboard");
      } else {
        alert("Identifiants incorrects !");
      }
    } catch (error) {
      console.error("Erreur de connexion", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    try {
      const { data } = await axios.get("http://localhost:5000/users");
      if (data.some((user) => user.email === email)) {
        alert("Cet email est déjà utilisé !");
        return;
      }

      await axios.post("http://localhost:5000/users", { username, email, password });
      alert("Inscription réussie !");
      navigate("/login");
      setIsLoginMode(true); 
    } catch (error) {
      console.error("Erreur lors de l'inscription", error);
    }
  };

  const handleModeChange = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isLoginMode) {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  }, [isLoginMode, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="ENSET Logo" />
        <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
        <form onSubmit={isLoginMode ? handleLogin : handleSignup}>
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLoginMode ? "Sign In" : "Sign Up"}</button>
        </form>
        <Link
          to="#"
          className="auth-link"
          onClick={handleModeChange} 
        >
          {isLoginMode ? "New User? Click to sign up !!" : "Already registered? Click to sign in !!"}
        </Link>
      </div>
    </div>
  );
};

export default Auth;
