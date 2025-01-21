import Credential from '../models/credential.js';

export const addCredentials = async(req,res) => { 

    try {
        
        const { webUrl: url, username, password } = req.body;
        
        if(!url || !username || !password) { 

            return res.status(400).json({

                success: false,
                message: "Please fill all the fields"
            })
        }

        const newCredentials = await Credential.create({

            url,
            username,
            password
        });

        return res.status(200).json({
            
            success: true,
            message: "Credentials added successfully",
            data: newCredentials
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error : error.message
        })
    }
}
export const getAllCredentials = async(req,res) => { 

    try {

        const allCredentials = await Credential.find();

        return res.status(200).json({

            success: true,
            message: "All credentials fetched successfully",
            data: allCredentials
        })
        
    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error : error.message
        })
    }
}
export const getCredentialsById = async(req,res) => { 

    try {

        const { credentialId } = req.params;

        if (!credentialId) {
            
            return res.status(400).json({

                success: false,
                message: "Please provide credential id"
            })
        }

        const credentialData = await Credential.findById(credentialId);

        if (!credentialData) {
            
            return res.status(404).json({

                success: false,
                message: "No credential found"
            })
        }

        return res.status(200).json({

            success: true,
            message: "Credential fetched successfully",
            data: credentialData
        })
        
    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error : error.message
        })
    }
}
export const updateCredentials = async(req,res) => { 

    try {

        const { credentialId } = req.params;
        const { webUrl: url, username, password } = req.body;
        const credentialData = await Credential.findById(credentialId);

        if (!credentialData) { 

            return res.status(404).json({
                
                success: false,
                message: "No credential found"
            })
        }
        
        if (url) { 
              
            credentialData.url = url;
        }
        if (username) { 
              
            credentialData.username = username;
        }
        if (password) {
                
                credentialData.password = password;
        }
        
        await credentialData.save();

        return res.status(200).json({

            success: true,
            message: "Credential updated successfully",
            data: credentialData
        });
        
        
    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error : error.message
        })
    }
}
export const deleteCredentials = async(req,res) => { 

    try {
        
        const { credentialId } = req.params;
        
        if(!credentialId) { 

            return res.status(400).json({

                success: false,
                message: "Please provide credential id"
            })
        }

        const credentialData = await Credential.findByIdAndDelete(credentialId);

        if (!credentialData) {
            
            return res.status(404).json({

                success: false,
                message: "No credential found"
            })
        }

        return res.status(200).json({
            
            success: true,
            message: "Credential deleted successfully",
            data : credentialData
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error : error.message
        })
    }
}