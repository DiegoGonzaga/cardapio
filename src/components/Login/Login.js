import { Button, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const login = () => {
        console.log(`${username} + ${password}`);
    };
    return (
        <Stack spacing={4}>
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button colorScheme="teal" onClick={login}>
                Log In
            </Button>
        </Stack>
    );
};

export default Login;
