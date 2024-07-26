import jwt from "jsonwebtoken"

export const jwtAuth = (req, res, next)=>{
    const token = req.cookies.jsonwebtoken;
    if(token) {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = payload.userId;
        next();
    } else {
        res.status(400).send("Unauthorized! login to continue!");
    }
}