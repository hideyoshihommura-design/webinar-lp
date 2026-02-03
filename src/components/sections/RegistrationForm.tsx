"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const registrationSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  company: z.string().min(1, "会社名・施設名を入力してください"),
  role: z.string().min(1, "役職を選択してください"),
  employeeCount: z.string().min(1, "従業員数を選択してください"),
});

type RegistrationData = z.infer<typeof registrationSchema>;

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationData) => {
    // TODO: バックエンド連携
    console.log("Registration data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="section-padding bg-gradient-dark">
        <div className="container-default">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center bg-white rounded-2xl p-10 shadow-xl"
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              お申込みありがとうございます
            </h3>
            <p className="text-muted mb-4">
              ご登録いただいたメールアドレスに、セミナーの参加URLをお送りしました。
            </p>
            <p className="text-sm text-muted">
              メールが届かない場合は、迷惑メールフォルダをご確認ください。
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="section-padding bg-gradient-dark">
      <div className="container-default">
        <SectionTitle
          title="無料セミナーに申し込む"
          subtitle="30秒で申込み完了。参加URLをメールでお送りします。"
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-8 shadow-xl space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">
                お名前 <span className="text-secondary">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="山田 太郎"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
              {errors.name && (
                <p className="text-xs text-secondary mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">
                メールアドレス <span className="text-secondary">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="example@company.co.jp"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
              {errors.email && (
                <p className="text-xs text-secondary mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">
                会社名・施設名 <span className="text-secondary">*</span>
              </label>
              <input
                {...register("company")}
                type="text"
                placeholder="株式会社○○ / ○○介護施設"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
              {errors.company && (
                <p className="text-xs text-secondary mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">
                役職 <span className="text-secondary">*</span>
              </label>
              <select
                {...register("role")}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
              >
                <option value="">選択してください</option>
                <option value="経営者・理事長">経営者・理事長</option>
                <option value="施設長・管理者">施設長・管理者</option>
                <option value="事務長・事務担当">事務長・事務担当</option>
                <option value="人事・研修担当">人事・研修担当</option>
                <option value="その他">その他</option>
              </select>
              {errors.role && (
                <p className="text-xs text-secondary mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">
                従業員数 <span className="text-secondary">*</span>
              </label>
              <select
                {...register("employeeCount")}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
              >
                <option value="">選択してください</option>
                <option value="1-10名">1〜10名</option>
                <option value="11-30名">11〜30名</option>
                <option value="31-100名">31〜100名</option>
                <option value="101名以上">101名以上</option>
              </select>
              {errors.employeeCount && (
                <p className="text-xs text-secondary mt-1">
                  {errors.employeeCount.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-cta disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "送信中..." : "無料で席を確保する"}
              {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted">
              <Shield className="w-4 h-4" />
              <span>入力情報は厳重に管理し、第三者に提供することはありません</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
