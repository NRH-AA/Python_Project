import { useModal } from "../../context/Modal";


function UserHome({ id }) {
    const { closeModal } = useModal();

    console.log(id)

    return (
        <h1>User Homepage</h1>
    )
}

export default UserHome
