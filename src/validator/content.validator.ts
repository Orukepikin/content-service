import Joi from "joi";
import { validator } from "./validator.utils";
import { } from "@prisma/client";

const search_schema = Joi.object({
    search_text: Joi.string().required(),
});

export const search_text_validator = validator(search_schema);


const get_byId_data_schema = Joi.object({
    id: Joi.string().required(),
});

export const user_id_data_validator = validator(get_byId_data_schema);

const create_post_schema = Joi.object({
    community_id: Joi.string().required(),
    title: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    user_id: Joi.string().required(),
    media_url: Joi.string().optional().allow(null, ""),
});
export const create_post_validator = validator(create_post_schema);

const add_comment_schema = Joi.object({
    post_id: Joi.string().required(),
    user_id: Joi.string().required(),
    parent_id: Joi.string().optional().allow(null, ""),
    text: Joi.string().required(),
});
export const add_comment_validator = validator(add_comment_schema);

const upload_media_schema = Joi.object({
    file: Joi.object().required(),
});
export const upload_media_validator = validator(upload_media_schema);




