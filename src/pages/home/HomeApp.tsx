import React, { useEffect, useState, useRef } from 'react'
import { apiUsers } from "../../shared/lib/apiUsers";
import type { Product, User } from '../../shared/lib/models';
import Button from '../../shared/Button';

export default function HomeApp() {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [removingItem, setRemovingItem] = useState(null);




    useEffect(() => {
        const loadData = async () => {
            try {
                const _users = await  apiUsers.getUsersNoWait();
                setUsers(_users.slice(0, 5))
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load data')
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])


    const handleDelete = (e: any, cardId: number) => {
        e.preventDefault();
        e.stopPropagation(); 
        setRemovingItem(cardId); 
        setTimeout(() => {
            const updatedCards = users.filter((card) => card.id !== cardId);
            console.log("updatedCards=", updatedCards);
            setUsers(updatedCards);
            console.log("users=", users);
            setRemovingItem(null);
        },300);
    };

    function getShortSubstring30(str) {
        if (str.length > 30) {
            return str.substring(0, 30) + "...";
        }
        return str;
    }
    if (loading) {
        return <div className="loader">Loading...</div>
    }
    if (error) {
        return <div className="error">{error}</div>
    }
    return (
        <main>
            <h2>Welcome to Home</h2>

            <div className="card-list">
                {users.map((item, index) => (
                    <div
                        key={index}
                        className={`card ${removingItem === item.id ? 'removing' : ''}`}
                        
                    >
                        <p> {item.id} - {getShortSubstring30(item.name)}</p>
                        <h5 > {item.username}$</h5>
                        <h5 > {item.email}$</h5>
                        <button className="delete-button" onClick={(e) => handleDelete(e, item.id)}>Delete</button>
                    </div>
                ))}
            </div>


        </main>
    )
}