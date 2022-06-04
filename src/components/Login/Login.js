import { Button, Input, Stack } from "@chakra-ui/react";
import React from "react";

const Login = () => {
    return <Stack spacing={4} >
        <Input placeholder='Username' />
        <Input type="password" placeholder='Password' />
        <Button colorScheme='teal' >Log In</Button>
    </Stack>
}

export default Login;