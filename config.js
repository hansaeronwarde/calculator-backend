const env = process.env;

const config = {
  db: {
    host:
      env.DB_HOST || "ec2-54-169-182-174.ap-southeast-1.compute.amazonaws.com",
    port: env.DB_PORT || "5432",
    user: env.DB_USER || "applicant",
    password: env.DB_PASSWORD || "OxzdeuEXBM85=+xQnCV7U",
    database: env.DB_NAME || "FSD_2022_WARDE",
  },
};

export default config;
