import { Modal, Button, Form, FormGroup } from "react-bootstrap"
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, handleClose, editItem }) => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        //bütün inputlarda ki değerlerden bir nesne oluştur.
        const formData = new FormData(e.target)
        const taskData = Object.fromEntries(formData.entries())
        //güncellenecek eleman varsa
        if (editItem) {
            dispatch(editTask({ id: editItem.id, ...taskData }))
        } else {
            dispatch(addTask(taskData))
        }


        //modalı kapat
        handleClose()
    }
    return (
        <div>
            <Modal centered className="text-black" show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editItem ? "görevi güncelle" : "yeni görev ekle"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                        <FormGroup>
                            <Form.Label>Görev tanımı:</Form.Label>
                            <Form.Control defaultValue={editItem?.title} name="title" placeholder="Navbarı düzenle" required />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>İsminiz:</Form.Label>
                            <Form.Control defaultValue={editItem?.author} name="author" placeholder="Ahmet" required />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Oluşturan:</Form.Label>
                            <Form.Control defaultValue={editItem?.assigned_to} name="assigned_to" placeholder="Mehmet" required />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Son teslim tarihi:</Form.Label>
                            <Form.Control defaultValue={editItem?.end_date} name="end_date" type="date" required />
                        </FormGroup>


                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                İptal
                            </Button>
                            <Button type="submit" variant="primary">
                                {editItem ? "kaydet" : "Oluştur"}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default FormModal