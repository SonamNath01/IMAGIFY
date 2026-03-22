// middlewares/auth.js
import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.user = { id: tokenDecode.id };  
            next();
        } else {
            return res.status(403).json({ success: false, message: 'Invalid Token. Login Again' });
        }
    } catch (error) {
        console.log("Auth Middleware Error:", error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default userAuth;
