const grpc = require('grpc');
const path = require('path');

const NoteService = grpc.load('notes.proto').NoteService;

const client = new NoteService('localhost:50051',
    grpc.credentials.createInsecure());


module.exports = client;