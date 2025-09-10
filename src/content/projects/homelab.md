---
title: "My DevOps Homelab"
description: "My DevOps homelab deployed on AWS with Terraform and managed with Kubernetes (k3s) and GitOps configuration with ArgoCD."
technologies:
  - AWS
  - Kubernetes
  - Docker
  - Terraform
  - Ansible
  - ArgoCD
  - Helm
  - Grafana
  - Prometheus
  - Loki
  - GitHub Actions
type: "proyecto"
cover: "/images/homepage.png"
githubUrl: "https://github.com/julianzanetti/homelab"
featured: true
---

This project is a personal lab environment on AWS with real DevOps practices. The goal is to simulate a productive 24/7 infrastructure with multiple applications, observability, GitOps, security and automation.

## 🛠️ Technologies used
- 🐧 Linux (arm64)
- ☸️ Kubernetes (K3s)
- 📦 Docker
- 🤖 Ansible
- 🌍 Terraform
- ☁️ AWS EC2 Spot + EBS + Route 53
- ⚓ Helm (to deploy NGINX Ingress and Cert-Manager)
- 🐘 PostgreSQL (with monitoring)
- 🚀 ArgoCD
- 📊 Prometheus + Grafana + Loki
- 🔐 Let's Encrypt (cert-manager)
- ⚙️ GitHub Actions (CI/CD)

## 🌍 Apps deployed (In progress...)
| App               | Subdomain              |
|-------------------|--------------------------|
| Homepage          | [home.julianzanetti-lab.com](https://home.julianzanetti-lab.com)      | 
| Portfolio Web     | [julianzanetti-lab.com](https://julianzanetti-lab.com)           |
| PendingTask       | [pendingtask.julianzanetti-lab.com](https://pendingtask.julianzanetti-lab.com)   |
| Grafana           | [grafana.julianzanetti-lab.com](https://grafana.julianzanetti-lab.com)  |
| ArgoCD            | [argocd.julianzanetti-lab.com](https://argocd.julianzanetti-lab.com)    |
| Prometheus        |           -              |
| Loki              |           -              |

## 🧩 Infrastructure
3 EC2 Spot instances (`t4g.small` x2 + `t4g.micro`) with EBS volumes (`10GB each one`) and custom domain. K3s is installed on them and orchestrates all services, exposed with HTTPS thanks to NGINX Ingress + cert-manager with Let's Encrypt.

## 🧠 Objective
Learn and demonstrate professional skills in:

- True cloud deployment
- Centralised monitoring and logging
- Cloud security
- GitOps + CI/CD
- Infrastructure as code

## 📬 Contact
If you want to talk about DevOps, automation, cloud computing, or technology in general, don't hesitate to contact me!💬