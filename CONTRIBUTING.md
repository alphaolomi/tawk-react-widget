# Contributing to tawk-react-widget

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Setup

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/tawk-react-widget.git
   cd tawk-react-widget
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development

### Project Structure

```
tawk-react-widget/
├── src/
│   ├── index.tsx          # Main component
│   ├── nextjs.tsx         # Next.js specific export
│   ├── types.ts           # TypeScript type definitions
│   ├── utils/
│   │   ├── helper.ts      # Helper functions
│   │   └── widget.ts      # Widget loading logic
│   └── __tests__/         # Test files
├── examples/              # Usage examples
├── docs/                  # Documentation
└── dist/                  # Build output (generated)
```

### Available Scripts

```bash
# Development mode with watch
npm run dev

# Build the package
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage
npm run test:coverage

# Type checking
npm run typecheck

# Lint code
npm run lint
```

### Testing

We use Vitest for testing. Tests are located in `src/__tests__/`.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Type Checking

```bash
# Check types
npm run typecheck
```

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions
- Avoid `any` types when possible
- Export types for public APIs

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commits

We follow conventional commit messages:

```
feat: add new feature
fix: bug fix
docs: documentation changes
test: add or update tests
refactor: code refactoring
chore: maintenance tasks
```

Examples:

```bash
git commit -m "feat: add support for custom themes"
git commit -m "fix: resolve memory leak in event listeners"
git commit -m "docs: update API reference"
```

## 🧪 Testing Guidelines

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good test coverage
- Test both happy paths and edge cases

## 📦 Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md with your changes
5. Create a Pull Request with a clear description

### PR Title Format

Follow conventional commit format:

- `feat: Add X feature`
- `fix: Resolve Y issue`
- `docs: Update Z documentation`

### PR Description Template

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tests added/updated
- [ ] All tests passing

## Checklist

- [ ] Code follows project style
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps to reproduce the bug
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**:
   - React version
   - Next.js version (if applicable)
   - Browser (if applicable)
   - Node.js version

## 💡 Suggesting Features

When suggesting features:

1. **Use Case**: Explain the use case
2. **Proposed Solution**: Describe your proposed solution
3. **Alternatives**: List any alternatives you've considered
4. **Additional Context**: Add any other context

## 📖 Documentation

- Keep README.md up to date
- Update API reference for new features
- Add examples for new functionality
- Use clear and concise language

## ❓ Questions

If you have questions:

1. Check existing documentation
2. Search existing issues
3. Create a new discussion or issue

## 🙏 Thank You

Your contributions make this project better for everyone. Thank you for taking the time to contribute!

## 📄 License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 License.
