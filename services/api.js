import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://qbtqwhhggelrhexnolti.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidHF3aGhnZ2VscmhleG5vbHRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3OTMzNTcsImV4cCI6MjA0MDM2OTM1N30.eCC2IXklGTa58zGrTsQjxF7TheSzbMA7hfsYCkYj3OY",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidHF3aGhnZ2VscmhleG5vbHRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3OTMzNTcsImV4cCI6MjA0MDM2OTM1N30.eCC2IXklGTa58zGrTsQjxF7TheSzbMA7hfsYCkYj3OY"
    
    }
});