🏢 Job Management System
📌 Sobre o projeto
O Job Management System é uma aplicação para gerenciamento de vagas de trabalho, permitindo o cadastro de empresas, usuários e a criação de vagas. O sistema oferece autenticação segura via JWT e gerenciamento eficiente de dados com Spring Data JPA.

🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

Java 17+
Spring Boot
Spring Data JPA
Spring Security
JWT (Java JWT)
Lombok
PostgreSQL
Docker & Docker Compose

🛠️ Como executar o projeto
📦 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

Java 17+
Docker
Postgres


🔧 Rodando a aplicação
Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/job-management-system.git
cd job-management-system
Configure o banco de dados PostgreSQL utilizando Docker Compose:

bash
Copiar
Editar
docker-compose up -d
Execute a aplicação:

bash
Copiar
Editar
./mvnw spring-boot:run
A aplicação estará disponível em http://localhost:8080.

🔐 Autenticação
A autenticação é baseada em JWT (JSON Web Token). Para acessar os endpoints protegidos, é necessário obter um token realizando login na API.
