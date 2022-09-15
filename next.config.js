require('./envLoader');


module.exports = {
  target: 'serverless',
  env: {
    RPC_URL: process.env.RPC_URL,
    CHAIN_ID: process.env.CHAIN_ID,
    SUPABASE_URL:process.env.SUPABASE_URL, 
    SUPABASE_KEY:process.env.SUPABASE_KEY
  },
  poweredByHeader: false,
};
