import mongoose from 'mongoose';

const credentialSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {

        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    }
}, {
    timeStamps: true
}
);

const Credential = mongoose.model('Credential', credentialSchema);

export default Credential;