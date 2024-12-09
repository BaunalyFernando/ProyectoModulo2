if [ ! -f .env ]; then
  echo -e "${GREEN}Creating .env file...${NC}"
  cat > .env <<EOL
MONGO_URI="tu url"
EOL
  echo -e "${GREEN}.env file created. Please update it with your MongoDb URI.${NC}"
else
  echo -e "${GREEN}.env file already exists. Skipping creation.${NC}"
fi