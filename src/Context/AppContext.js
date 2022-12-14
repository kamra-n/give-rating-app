import { createContext, useState } from "react";
const AppContextData = createContext();

export function AppContext({ children }) {
    const [data, setData] = useState([{
        id: 1,
        rating: 1,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat consectetur iusto perspiciatis ab vero eius?'
    },])

    // add feedback
    const addFeedback = (formData) => {
        setData([...data, formData]);
    }

    // delete feedback
    const deleteFeedback = (id) => {
        const updatedData = data.filter((v) => v.id !== id)
        return setData(updatedData);
    }
    return (
        <AppContextData.Provider value={{ data, setData, addFeedback, deleteFeedback }}>
            {children}
        </AppContextData.Provider>
    )
}

export default AppContextData