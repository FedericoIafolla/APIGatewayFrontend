import React, { useState } from "react";
import "./ApiGateway.css";

// aggiungere sidebar, navbar e impostazione generale. Inoltre aggiungere collegamento per e-commerce

const services = [
    { name: "Servizio 1", path: "service1" },
    { name: "Servizio 2", path: "service2" },
    { name: "Servizio 3", path: "service3" },
    { name: "Servizio 4", path: "service4" }
];

const ApiGateway = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleServiceClick = async (service) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/gateway/${service}`);
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (err) {
            setError("Errore nel recupero dei dati!");
            setData(null);
        }
    };

    return (
        <>
            <h1 className="api-gateway-title">Al vostro servizio</h1>
            <div className="api-gateway-cards-container">
                {services.map((service, index) => (
                    <div key={index} className="api-gateway-card">
                        <div className="card-image">
                            {service.name}
                        </div>
                        <div className="card-content">
                            <p className="text">Descrizione del servizio</p>
                            <a
                                href="#"
                                className="link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleServiceClick(service.path);
                                }}
                            >
                                Accedi
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {error && <p className="api-gateway-error">{error}</p>}
            {data && <pre className="api-gateway-response">{JSON.stringify(data, null, 2)}</pre>}
        </>
    );
};

export default ApiGateway;
