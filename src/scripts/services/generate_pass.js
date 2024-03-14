export function generate_pass(size, chars){
    let password = '';
    chars = chars || Object.values(chars).join();
    
    for (let i = 0; i < size; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    
    return password;
}