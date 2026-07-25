import { Body, Controller, Get, JsonController, Param, Post, Req, Res } from "routing-controllers";
import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { ContactRequest } from "../models/contact/contactRequest";
import { Mailer } from "../lib/mailer";

@Service()
@JsonController("/api/contact")
export class ContactController {
    @Inject()
    mailer!: Mailer; 

    @Post()
    async post(@Body() requestBody: ContactRequest, @Req() request: Request) {
        const success = await this.mailer.sendEmail(requestBody.message, requestBody.replyTo);
        return {
            success
        }
    }
}