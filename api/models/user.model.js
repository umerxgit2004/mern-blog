import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMC/8QAORAAAgIBAgMDCQYFBQAAAAAAAAECAwQFESExQRJRYQYTFCJCcaHB4SMyUnKBsRUzkdHwU1Ric5L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3oAAAAAAAAAAAmMZSe0YtvuSOmvTsyzlRJfm4AcoLD+D5m2/Zh7u0edmmZkOLpb/ACtMDjB9ThOt7WQlB90lsfIAAAAAAAAAAAAAAAAAA+oQlZNQhFuUnskgIinKSjFNyfJLqXGHou6U8t7f8I/Nnbp2BDEgpP1rXzl3eCO0DzpoqpXZprjBeCPQAAAAPmyuFsezZGMl3NFXl6LXNOWM+w/wP7v0LYAY+2qymx12xcZroz4NXmYlWXX2bFx9mXVGZyaLMa512riuXiu8DyAAAAAAAAAAAAAC/wBFw/NVefsXrzXDwRUYFHpOXXX7Le8vcapJJJLl0AkAAAAAAAAAADj1PDWXQ9kvOR4wZ2BoDGbbPbZprmCw1rH8zlucV6tq7X69SvAAAAAAAAAAAC48nq/WutfTaK+ZdlZ5PrbDk++x/sizAEkEgAAAAAAAAAABWa9V2sRT6wkvjwM8anVlvp1/5fmZYAAAAAAAAAAANB5PyTxJx6xsf7Isyi8n7VG22p+0lJfoXoAkgkAAAAAAAAAAAOPVpKOn3b9Vt8TLmg8oLeziwrXOcvgv8RnwAAAAAAAAAAA9sW94+RC1ey+Pu6msjJTipRe6a3TMaXWiZvD0W1/9bf7AXJJCJAAAAAAAAABgrtXzVj0uqD+1mv6LvAqdWyPSMyXZe8IeqjiAAAAAAAAAAAAASm0002muKaIAGg0zVI3JVXtRt6S6S+paIxZY4erXUJQtXnYLr1QGjByY+oYt6ShalL8MuDOrcCQBuABz35mPQvtLYp9ye7KnL1mc12caLgn7clx/oBYahqEMRdlbTtfKPd4szdlk7bJTsfalJ7tkNtttttvm2QAAAAAAAAAAAAAAAe+Li3ZU+zTHfbnJ8l7y6xdHoq2ld9rLx5L9AKGFVlm/mq5T/Ktz5aabTTTXR8zZRjGMezFJLuXA8MnCx8n+bUm/xLgwMmekLra/uWzj7pNFtdofWm7bwmvmcs9Hy48owl7pAc/p2V/uLf8A0fE8i+f37pv3yZ7/AMLzP9H4o+46RmS5wjH3yA4AXFWhy4eeuS8ILf4ljjafjY73hWpSXtS4sDNTpthFSnXOMX1aPg2TSa2a4HDk6XjX7uMfNyfWH9gM0DqzcC7E4zXah0nHl9DlAAAAAAAAAHZp2BLMs3lwqi+MvkjxxaJZN8aoc3zfcjVUUwoqjXWtoxWwCmqFMFXVFRguSR6EACQAAAAAAAAAAAAESipRcZJNPmmZ7VNN9G3tpW9PVfh+hoiJRUotSSafNMDGA69TxPRMjsr+XLjB/I5AAAADqABeeT0I+ats29dy7O/gXAAEAACQAAAAAAAAAAAAAAAV+uVxlp85tetBpp/qZsAAAAP/2Q=="
    }

}, {timestamps:true})

//create model
const User = mongoose.model('User',userSchema)

export default User // to use it in other parts of application to access db