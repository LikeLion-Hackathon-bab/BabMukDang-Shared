# BabMukDang Shared Domain Contracts

Shared owns DTO contracts and schema contracts only.

- `schema/*`: Zod schemas for runtime validation and type inference.
- `contracts/*`: exported DTO/request/response/event/endpoint types inferred from schemas.
- Backend responsibility: map Entity -> DTO, validate requests/responses with schemas, and keep TypeORM entities persistence-only.
- Client responsibility: communicate with DTO contracts and validate responses in development/test with schemas.

Do not place TypeORM entities, React view models, or application services in this package.
