# Contributing to Estoque

Thank you for your interest in contributing to Estoque! Here are some guidelines to help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Estoque.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Follow the setup instructions in [SETUP.md](./docs/SETUP.md)

## Development Workflow

1. Make your changes
2. Test your changes locally
3. Commit with clear messages: `git commit -m "feat: add amazing feature"`
4. Push to your branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Commit Convention

We follow Conventional Commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes (formatting, semicolons, etc)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Build process, dependencies, etc

Example:
```
feat(inventory): add stock adjustment feature
fix(api): correct product price calculation
docs(readme): update installation steps
```

## Code Style

- Use ESLint for JavaScript/Node.js
- Use Prettier for code formatting
- Follow existing code patterns in the repository

### Run Linting
```bash
# Backend
cd backend
npm run lint

# Frontend
cd frontend
npm run lint
```

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for >80% code coverage

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Pull Request Process

1. Ensure all tests pass
2. Update documentation as needed
3. Add description of changes in PR
4. Link related issues
5. Wait for review and address feedback

## Reporting Issues

When reporting bugs, include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/logs if applicable
- Environment (OS, Node version, etc)

## Feature Requests

When suggesting features:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Any potential challenges

## Questions?

Open an issue with the `question` label or check existing discussions.

---

Thank you for contributing to make Estoque better! 🎉
