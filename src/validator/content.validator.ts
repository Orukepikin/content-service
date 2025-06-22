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
    content: Joi.string().required(),
});
export const add_comment_validator = validator(add_comment_schema);

const upload_media_schema = Joi.object({
    path: Joi.string().required(),
});
export const upload_media_validator = validator(upload_media_schema);

export const like_post_validator = (data: any) => {
    const schema = Joi.object({
        user_id: Joi.string().required(),
        post_id: Joi.string().required(),
    });

    return schema.validate(data);
  };

export const create_community_validator = (data: any) => {
    const schema = Joi.object({
        user_id: Joi.string().uuid().required(),
        name: Joi.string().required(),
        description: Joi.string().optional().allow(null, ''),
    });

    return schema.validate(data);
};

export const like_comment_validator = (data: any) => {
    const schema = Joi.object({
        user_id: Joi.string().uuid().required(),
        comment_id: Joi.string().uuid().required(),
    });

    return schema.validate(data);
  };


export const update_post_validator = (data: any) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(100).required(),
        category: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(10).required(),
        mediaUrl: Joi.string().uri().optional().allow(null, ''),
    });

    return schema.validate(data);
  };

export const search_post_validator = (data: any) => {
    const schema = Joi.object({
        query: Joi.string().min(1).required(),
    });

    return schema.validate(data);
  };




