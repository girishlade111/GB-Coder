export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface CodeSnippet {
  id: string;
  project_id: string;
  html_content: string;
  css_content: string;
  js_content: string;
  version: number;
  created_at: string;
  updated_at: string;
}

export interface CodeFile {
  id: string;
  user_id: string;
  code_content: string;
  language: 'html' | 'css' | 'javascript';
  title: string;
  created_at: string;
}