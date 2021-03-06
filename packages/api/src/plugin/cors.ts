import fp from "fastify-plugin";
import fastifyCors from "fastify-cors";
import { FastifyCorsOptions } from "fastify-cors";

export default fp<FastifyCorsOptions>(async (fastify, _) => {
    fastify.register(fastifyCors);
});