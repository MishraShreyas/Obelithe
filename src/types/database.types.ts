export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			activity_logs: {
				Row: {
					action: string | null;
					created_at: string | null;
					details: Json | null;
					id: string;
					task_id: string | null;
					user_id: string | null;
				};
				Insert: {
					action?: string | null;
					created_at?: string | null;
					details?: Json | null;
					id?: string;
					task_id?: string | null;
					user_id?: string | null;
				};
				Update: {
					action?: string | null;
					created_at?: string | null;
					details?: Json | null;
					id?: string;
					task_id?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "activity_logs_task_id_fkey";
						columns: ["task_id"];
						isOneToOne: false;
						referencedRelation: "tasks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "activity_logs_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			labels: {
				Row: {
					color: string | null;
					id: string;
					name: string;
					project_id: string | null;
				};
				Insert: {
					color?: string | null;
					id?: string;
					name: string;
					project_id?: string | null;
				};
				Update: {
					color?: string | null;
					id?: string;
					name?: string;
					project_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "labels_project_id_fkey";
						columns: ["project_id"];
						isOneToOne: false;
						referencedRelation: "projects";
						referencedColumns: ["id"];
					}
				];
			};
			notifications: {
				Row: {
					created_at: string | null;
					id: string;
					payload: Json | null;
					read: boolean | null;
					type: string | null;
					user_id: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: string;
					payload?: Json | null;
					read?: boolean | null;
					type?: string | null;
					user_id?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: string;
					payload?: Json | null;
					read?: boolean | null;
					type?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "notifications_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			permissions: {
				Row: {
					description: string | null;
					id: string;
					name: string;
				};
				Insert: {
					description?: string | null;
					id?: string;
					name: string;
				};
				Update: {
					description?: string | null;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			projects: {
				Row: {
					created_at: string | null;
					created_by: string | null;
					description: string | null;
					due_date: string | null;
					id: string;
					priority: number | null;
					status: string | null;
					team_id: string | null;
					title: string;
				};
				Insert: {
					created_at?: string | null;
					created_by?: string | null;
					description?: string | null;
					due_date?: string | null;
					id?: string;
					priority?: number | null;
					status?: string | null;
					team_id?: string | null;
					title: string;
				};
				Update: {
					created_at?: string | null;
					created_by?: string | null;
					description?: string | null;
					due_date?: string | null;
					id?: string;
					priority?: number | null;
					status?: string | null;
					team_id?: string | null;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: "projects_created_by_fkey";
						columns: ["created_by"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "projects_team_id_fkey";
						columns: ["team_id"];
						isOneToOne: false;
						referencedRelation: "teams";
						referencedColumns: ["id"];
					}
				];
			};
			role_permissions: {
				Row: {
					permission_id: string;
					role_id: string;
				};
				Insert: {
					permission_id: string;
					role_id: string;
				};
				Update: {
					permission_id?: string;
					role_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "role_permissions_permission_id_fkey";
						columns: ["permission_id"];
						isOneToOne: false;
						referencedRelation: "permissions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "role_permissions_role_id_fkey";
						columns: ["role_id"];
						isOneToOne: false;
						referencedRelation: "roles";
						referencedColumns: ["id"];
					}
				];
			};
			roles: {
				Row: {
					created_at: string | null;
					description: string | null;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					description?: string | null;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string | null;
					description?: string | null;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			task_attachments: {
				Row: {
					created_at: string | null;
					id: string;
					task_id: string | null;
					uploaded_by: string | null;
					url: string;
				};
				Insert: {
					created_at?: string | null;
					id?: string;
					task_id?: string | null;
					uploaded_by?: string | null;
					url: string;
				};
				Update: {
					created_at?: string | null;
					id?: string;
					task_id?: string | null;
					uploaded_by?: string | null;
					url?: string;
				};
				Relationships: [
					{
						foreignKeyName: "task_attachments_task_id_fkey";
						columns: ["task_id"];
						isOneToOne: false;
						referencedRelation: "tasks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "task_attachments_uploaded_by_fkey";
						columns: ["uploaded_by"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			task_comments: {
				Row: {
					content: string | null;
					created_at: string | null;
					id: string;
					task_id: string | null;
					user_id: string | null;
				};
				Insert: {
					content?: string | null;
					created_at?: string | null;
					id?: string;
					task_id?: string | null;
					user_id?: string | null;
				};
				Update: {
					content?: string | null;
					created_at?: string | null;
					id?: string;
					task_id?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "task_comments_task_id_fkey";
						columns: ["task_id"];
						isOneToOne: false;
						referencedRelation: "tasks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "task_comments_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			task_labels: {
				Row: {
					label_id: string;
					task_id: string;
				};
				Insert: {
					label_id: string;
					task_id: string;
				};
				Update: {
					label_id?: string;
					task_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "task_labels_label_id_fkey";
						columns: ["label_id"];
						isOneToOne: false;
						referencedRelation: "labels";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "task_labels_task_id_fkey";
						columns: ["task_id"];
						isOneToOne: false;
						referencedRelation: "tasks";
						referencedColumns: ["id"];
					}
				];
			};
			tasks: {
				Row: {
					assigned_to: string | null;
					created_at: string | null;
					created_by: string | null;
					description: string | null;
					due_date: string | null;
					id: string;
					parent_task_id: string | null;
					percent: number | null;
					priority: number | null;
					project_id: string | null;
					status: string | null;
					title: string;
				};
				Insert: {
					assigned_to?: string | null;
					created_at?: string | null;
					created_by?: string | null;
					description?: string | null;
					due_date?: string | null;
					id?: string;
					parent_task_id?: string | null;
					percent?: number | null;
					priority?: number | null;
					project_id?: string | null;
					status?: string | null;
					title: string;
				};
				Update: {
					assigned_to?: string | null;
					created_at?: string | null;
					created_by?: string | null;
					description?: string | null;
					due_date?: string | null;
					id?: string;
					parent_task_id?: string | null;
					percent?: number | null;
					priority?: number | null;
					project_id?: string | null;
					status?: string | null;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: "tasks_assigned_to_fkey";
						columns: ["assigned_to"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "tasks_created_by_fkey";
						columns: ["created_by"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "tasks_parent_task_id_fkey";
						columns: ["parent_task_id"];
						isOneToOne: false;
						referencedRelation: "tasks";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "tasks_project_id_fkey";
						columns: ["project_id"];
						isOneToOne: false;
						referencedRelation: "projects";
						referencedColumns: ["id"];
					}
				];
			};
			team_members: {
				Row: {
					id: string;
					joined_at: string | null;
					team_id: string | null;
					user_id: string | null;
				};
				Insert: {
					id?: string;
					joined_at?: string | null;
					team_id?: string | null;
					user_id?: string | null;
				};
				Update: {
					id?: string;
					joined_at?: string | null;
					team_id?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "team_members_team_id_fkey";
						columns: ["team_id"];
						isOneToOne: false;
						referencedRelation: "teams";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "team_members_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			teams: {
				Row: {
					created_at: string | null;
					description: string | null;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					description?: string | null;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string | null;
					description?: string | null;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			user_roles: {
				Row: {
					assigned_at: string | null;
					context_id: string | null;
					context_type: string | null;
					id: string;
					role_id: string | null;
					user_id: string | null;
				};
				Insert: {
					assigned_at?: string | null;
					context_id?: string | null;
					context_type?: string | null;
					id?: string;
					role_id?: string | null;
					user_id?: string | null;
				};
				Update: {
					assigned_at?: string | null;
					context_id?: string | null;
					context_type?: string | null;
					id?: string;
					role_id?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "user_roles_role_id_fkey";
						columns: ["role_id"];
						isOneToOne: false;
						referencedRelation: "roles";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "user_roles_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
				];
			};
			users: {
				Row: {
					avatar_url: string | null;
					created_at: string | null;
					full_name: string | null;
					id: string;
				};
				Insert: {
					avatar_url?: string | null;
					created_at?: string | null;
					full_name?: string | null;
					id: string;
				};
				Update: {
					avatar_url?: string | null;
					created_at?: string | null;
					full_name?: string | null;
					id?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	DefaultSchemaTableNameOrOptions extends
		| keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
		| { schema: keyof Database },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
				Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
		: never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
	? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
			Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
			DefaultSchema["Views"])
	? (DefaultSchema["Tables"] &
			DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
			Row: infer R;
	  }
		? R
		: never
	: never;

export type TablesInsert<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof Database },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
	? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
	? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
			Insert: infer I;
	  }
		? I
		: never
	: never;

export type TablesUpdate<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof Database },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
	? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
	? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
			Update: infer U;
	  }
		? U
		: never
	: never;

export type Enums<
	DefaultSchemaEnumNameOrOptions extends
		| keyof DefaultSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends DefaultSchemaEnumNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
		: never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
	? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
	? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
	: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof DefaultSchema["CompositeTypes"]
		| { schema: keyof Database },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
	? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
	? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
	: never;

export const Constants = {
	public: {
		Enums: {},
	},
} as const;
