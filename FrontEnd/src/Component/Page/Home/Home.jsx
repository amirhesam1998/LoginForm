import React from "react";
import FormGroup from "../../Form/FormGroup";
import Form from "../../Form/Form";
import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <FormGroup>
            <Form>
                <div class="d-grid gap-2">
                    <Link to="/register" className="btn btn-primary" type="button">Register</Link>
                    <Link to="/login" className="btn btn-primary" type="button">Login</Link>
                </div>
            </Form>
        </FormGroup>
    )
}
export default Home;