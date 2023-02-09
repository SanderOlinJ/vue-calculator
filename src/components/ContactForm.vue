<template>
    <div id="loginContainer">
        <div id="loginTitle">
            <label>Please login!</label>
        </div>
        <div id="name">
            <label id="nameLabel">Name:</label>
            <textarea v-model="name" id="nameText"></textarea>
        </div>
        <div id="email">
            <label id="emailLabel">Email: </label>
            <textarea v-model="email" id="emailText"></textarea>
        </div>
        <div id="message">
            <label id="messageLabel">Message: </label>
            <textarea v-model="message" id="messageText"></textarea>
        </div>
        <div>
            <button v-on:click="handleSubmit()" id="submitButton">Submit form</button>
        </div>
    </div>
</template>

<script>
    import router from '@/router';
    export default {
        name: "LoginView",
        methods: {
            handleSubmit() {
                if (this.name === "" || this.email === "" || this.message === ""){
                    alert("Please fill out every field.")
                    return
                }
                if (!this.email.match(this.validRegex)){
                    alert("Invalid email address.")
                    return
                }
                if (this.name.length > 50){
                    alert("Name is too long (50 chars)")
                    return
                }
                if (this.email.length > 50){
                    alert("Email is too long (50 chars)")
                    return
                }
                if (this.message.length > 300){
                    alert("Message is too long (300 chars)")
                    return
                }
                
                router.push("/");
            }
        },
        data() {
            return {
                name: "",
                email: "",
                message: "",
                validRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            };
        }
    };
</script>

<style scoped>
    #loginContainer {
        display: grid;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 40px;
    }

    #loginTitle {
        font-size: x-large;
        font-weight: bold;
        margin-bottom: 50px;
        font-size: 30px;
        color: white;
    }

    #name,
    #email,
    #message {
        margin-right: 110px;
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 20px;
        margin-bottom: 20px;
    }

    #nameText,
    #emailText{
        align-content:center;
        overflow-x: auto;
        overflow-y: hidden;
        resize: none;
        font-size: 20px;
        width: 250px;
        height: 40px;

    }
    #messageText{
        overflow-x: auto;
        overflow-y: hidden;
        resize: none;
        font-size: 20px;
        width: 250px;
        height: 150px;
    }

    #nameLabel,
    #emailLabel,
    #messageLabel {
        width: 100px;
        color: white;
        font-weight: bold;
        font-size: 20px;
    }

    #submitButton{
        width: 200px;
        height: 50px;
        margin-top: 50px;
        background-color: rgb(75, 13, 133);
        border-color: rgb(164, 69, 255);
        color: white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
    }
</style>

