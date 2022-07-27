/* eslint-disable prefer-template */
/* istanbul ignore file */
const express = require("express")
const morgan = require("morgan")

const areaMockData = require("./__mocks__/area_dash.json")
const inductMockData = require("./__mocks__/induct_dash.json")
const peopleMockData = require("./__mocks__/people.json")
const sorterMockData = require("./__mocks__/sorter_dash.json")

const app = express()

const port = 3030

app.use(morgan("dev"))

app.get("/area", (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json; charset=UTF-8")
        res.status(200).send(areaMockData)
    } catch (error) {
        console.error(error)
        throw error
    }
})
app.get("/sorter", (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json; charset=UTF-8")
        res.status(200).send(sorterMockData)
    } catch (error) {
        console.error(error)
        throw error
    }
})
app.get("/induct", (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json; charset=UTF-8")
        res.status(200).send(inductMockData)
    } catch (error) {
        console.error(error)
        throw error
    }
})
app.get("/people", (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json; charset=UTF-8")
        res.status(200).send(peopleMockData)
    } catch (error) {
        console.error(error)
        throw error
    }
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
