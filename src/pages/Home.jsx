/* eslint-disable no-unused-vars */
import { Form } from "react-router-dom"
import { useState, useEffect } from "react";
//
import Image from "react-bootstrap/Image"
import FormBS from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { AiFillGithub } from "react-icons/ai";
import Card from 'react-bootstrap/Card';

export default function Home() {

    return (
        <div className="home text-center">
            <h2 className="display-6">Welcome to </h2>

            <h2 className="display-5 my-3 p-0">Old School MapleStory Library</h2>
            <h5 className="my-3 p-0"> Game version : v82 </h5>

            <Form className="d-flex m-5 p-3" method="post" action="/all">
                <FormBS.Control
                    className="p-1 me-3"
                    type="search"
                    placeholder="Global search ..."
                    aria-label="Search"
                    data-bs-theme="light"
                    name="searchName"
                />
                <Button className="w-50" variant="secondary" type="submit">Submit</Button>
            </Form>

            <Image className="w-75" src="/library2.png" />

            <p className="mt-5"> Created by YC Wong @ 2024 </p>
            <p> Copyright of all picture used here belongs to Nexon, and only fetched from maplestory.io </p>
            <p> A fan-made library for maple story old school</p>
        </div>
    )
}

