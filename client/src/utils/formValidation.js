export const validEmail = v => /.+@.+\..+/.test(v) || "כתובת אימייל לא חוקית";
export const required = v => !!v || "שדה זה הינו חובה";
