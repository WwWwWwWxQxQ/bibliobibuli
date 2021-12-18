(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{602:function(v,_,t){"use strict";t.r(_);var s=t(6),o=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("相信大家都用过事务以及了解他的特点，如"),t("code",[v._v("原子性")]),v._v("(Atomicity)，"),t("code",[v._v("一致性")]),v._v("(Consistency)，"),t("code",[v._v("隔离性")]),v._v("(Isolation)以及"),t("code",[v._v("持久性")]),v._v("(Durability)等。今天想跟大家一起研究下事务内部到底是怎么实现的，在讲解前我想先抛出个问题：")]),v._v(" "),t("p",[t("strong",[v._v("事务想要做到什么效果")]),v._v("\n按我理解，无非是要做到"),t("strong",[v._v("可靠性")]),v._v("以及"),t("strong",[v._v("并发处理")])]),v._v(" "),t("ul",[t("li",[v._v("可靠性：数据库要保证当"),t("code",[v._v("insert")]),v._v("或"),t("code",[v._v("update")]),v._v("操作时抛异常或者数据库"),t("code",[v._v("crash")]),v._v("的时候需要保障数据的操作前后的一致，想要做到这个，我需要知道我修改之前和修改之后的状态，所以就有了"),t("code",[v._v("undo log")]),v._v("和"),t("code",[v._v("redo log")]),v._v("。")]),v._v(" "),t("li",[v._v("并发处理：也就是说当多个并发请求过来，并且其中有一个请求是对数据修改操作的时候会有影响，为了避免读到脏数据，所以需要对事务之间的读写进行隔离，至于隔离到啥程度得看业务系统的场景了，实现这个就得用MySQL 的"),t("code",[v._v("隔离级别")]),v._v("。")])]),v._v(" "),t("blockquote",[t("p",[v._v("下面首先讲实现事务功能的三个技术，分别是"),t("code",[v._v("日志文件")]),v._v("(redo log 和 undo log)，"),t("code",[v._v("锁技术")]),v._v("以及"),t("code",[v._v("MVCC")]),v._v("，然后再讲事务的实现原理，包括原子性是怎么实现的，隔离型是怎么实现的等等。最后在做一个总结，希望大家能够耐心看完")])]),v._v(" "),t("h1",{attrs:{id:"mysql锁技术以及mvcc基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁技术以及mvcc基础"}},[v._v("#")]),v._v(" mysql锁技术以及MVCC基础")]),v._v(" "),t("h2",{attrs:{id:"mysql锁技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁技术"}},[v._v("#")]),v._v(" mysql锁技术")]),v._v(" "),t("p",[v._v("当有多个请求来"),t("strong",[v._v("读取")]),v._v("表中的数据时可以不采取任何操作，但是多个请求里有"),t("strong",[v._v("读请求")]),v._v("又有"),t("strong",[v._v("写请求")]),v._v("时，必须有一种措施来进行并发控制。不然很有可能会造成数据出错。")]),v._v(" "),t("h3",{attrs:{id:"读写锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读写锁"}},[v._v("#")]),v._v(" 读写锁")]),v._v(" "),t("p",[v._v("解决上述问题很简单，只需用两种锁的组合来对读写请求进行控制即可，这两种锁被称为：")]),v._v(" "),t("ul",[t("li",[v._v('共享锁(shared lock)，又叫做"读锁"')]),v._v(" "),t("li",[v._v('排他锁(exclusive lock)，又叫做"写锁"\n读锁是可以共享的，或者说多个读请求可以共享一把锁读数据，不会造成阻塞。\n写锁会排斥其他所有获取锁的请求，一直阻塞，直到写入完成后释放锁。\n另外，事务的隔离性就是根据读写锁来实现的。')])]),v._v(" "),t("blockquote",[t("p",[v._v("通过读写锁，可以做到读读可以并行，但是不能做到写读，写写并行")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/10/07/TGheY8XKZamUIg3.png",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"mvcc基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvcc基础"}},[v._v("#")]),v._v(" MVCC基础")]),v._v(" "),t("p",[t("code",[v._v("MVCC")]),v._v("（MultiVersion Concurrency Control）叫做"),t("strong",[v._v("多版本并发控制")]),v._v("。")]),v._v(" "),t("blockquote",[t("p",[v._v("InnoDB的 MVCC ，是通过在每行记录的后面保存两个隐藏的列来实现的。这两个列，一个保存了行的"),t("strong",[v._v("创建时间")]),v._v("，一个保存了行的"),t("strong",[v._v("过期时间")]),v._v("，当然存储的并不是"),t("strong",[v._v("实际的时间值")]),v._v("，而是"),t("strong",[v._v("系统版本号")]),v._v("。")])]),v._v(" "),t("p",[v._v("以上片段摘自《高性能Mysql》这本书对MVCC的定义。他的主要实现思想是通过数据多版本来做到读写分离。从而实现不加锁读进而做到读写并行。")]),v._v(" "),t("blockquote",[t("p",[v._v("MVCC在mysql中的实现依赖undo log与read view")])]),v._v(" "),t("ul",[t("li",[v._v("undo log：undo log 中记录某行数据的多个版本的数据。")]),v._v(" "),t("li",[v._v("read view：用来判断当前版本数据的可见性\n"),t("img",{attrs:{src:"https://i.loli.net/2020/10/07/rh3plHQ5xqSKo6i.png",alt:""}})])]),v._v(" "),t("h1",{attrs:{id:"redo-log与-undo-log介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log与-undo-log介绍"}},[v._v("#")]),v._v(" redo log与 undo log介绍")]),v._v(" "),t("h2",{attrs:{id:"redo-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log"}},[v._v("#")]),v._v(" redo log")]),v._v(" "),t("p",[v._v("什么是"),t("code",[v._v("redo log")]),v._v(" ?\n"),t("code",[v._v("redo log")]),v._v("叫做"),t("strong",[v._v("重做日志")]),v._v("，是用来实现事务的"),t("strong",[v._v("持久性")]),v._v("。该日志文件由两部分组成：")]),v._v(" "),t("ol",[t("li",[v._v("重做日志缓冲（redo log buffer）")]),v._v(" "),t("li",[v._v("重做日志文件（redo log file）")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/10/07/mChVejZWRtP58an.png",alt:""}})]),v._v(" "),t("blockquote",[t("p",[v._v("redo log 有什么作用？")])]),v._v(" "),t("p",[v._v("​\t首先我们先明确一下InnoDB的修改数据的基本流程。\n​\t当我们想要修改DB上某一行数据的时候，InnoDB会把数据从磁盘读取到内存的缓冲池上进行修改。这个时候数据在内存中被修改，与磁盘中相比就存在了差异，我们称这种有差异的数据为"),t("strong",[v._v("脏页")]),v._v("。InnoDB对脏页的处理不是每次生成脏页就将脏页刷新回磁盘，这样会产生海量的IO操作，严重影响InnoDB的处理性能。既然脏页与磁盘中的数据存在差异，那么如果在这期间DB出现故障，还没来得及执行上面图中红色的操作，就会导致丢部分已提交事务的修改信息。\n所以引入了redo log来记录已成功提交事务的修改信息，并且会把redo log持久化到磁盘，系统重启之后在读取redo log恢复最新数据。当我们提交一个事务时，InnoDB会先去把要修改的数据写入日志，然后再去修改缓冲池里面的真正数据页。\n说白了，redo log存储了数据被修改后的值，用来恢复数据，保障已提交事务的持久化特性")]),v._v(" "),t("h2",{attrs:{id:"undo-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undo-log"}},[v._v("#")]),v._v(" undo log")]),v._v(" "),t("blockquote",[t("p",[v._v("什么是 "),t("code",[v._v("undo log")]),v._v(" ？")])]),v._v(" "),t("p",[v._v("​\t"),t("code",[v._v("undo log")]),v._v(" 叫做"),t("strong",[v._v("回滚日志")]),v._v("，用于记录数据被修改前的信息。他正好跟前面所说的"),t("strong",[v._v("重做日志")]),v._v("所记录的相反，重做日志记录数据被修改后的信息。undo log主要记录的是数据的"),t("strong",[v._v("逻辑变化")]),v._v("，为了在发生错误时回滚之前的操作，需要将之前的操作都记录下来，然后在发生错误时才可以回滚。\n还用上面那两张表\n"),t("img",{attrs:{src:"https://i.loli.net/2020/10/07/EHdtRi7W53s2Tnv.png",alt:""}}),v._v("\n每次写入数据或者修改数据之前都会把"),t("strong",[v._v("修改前")]),v._v("的信息记录到 undo log。")]),v._v(" "),t("blockquote",[t("p",[v._v("undo log 有什么作用？")])]),v._v(" "),t("p",[v._v("undo log 记录事务修改之前版本的数据信息，因此假如由于系统错误或者"),t("code",[v._v("rollback")]),v._v("操作而回滚的话可以根据undo log的信息来进行回滚到没被修改前的状态。\nundo log是用来回滚数据的用于保障 未提交事务的"),t("strong",[v._v("原子性")])]),v._v(" "),t("h1",{attrs:{id:"事务的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的实现"}},[v._v("#")]),v._v(" 事务的实现")]),v._v(" "),t("p",[v._v("前面讲的"),t("strong",[v._v("重做日志")]),v._v("，"),t("strong",[v._v("回滚日志")]),v._v("以及"),t("strong",[v._v("锁技术")]),v._v("就是实现事务的基础。")]),v._v(" "),t("ul",[t("li",[v._v("事务的原子性是通过 "),t("strong",[v._v("undo log")]),v._v(" 来实现的")]),v._v(" "),t("li",[v._v("事务的持久性是通过 "),t("strong",[v._v("redo log")]),v._v(" 来实现的")]),v._v(" "),t("li",[v._v("事务的隔离性是通过 ("),t("strong",[v._v("读写锁+MVCC")]),v._v(")来实现的")]),v._v(" "),t("li",[v._v("而事务的终极大 boss "),t("strong",[v._v("一致性")]),v._v("是通过原子性，持久性，隔离性来实现的\n原子性，持久性，隔离性折腾半天的目的也是为了保障数据的一致性！\n总之，"),t("code",[v._v("ACID")]),v._v("只是个概念，事务最终目的是要保障数据的可靠性，一致性。")])]),v._v(" "),t("h2",{attrs:{id:"原子性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原子性"}},[v._v("#")]),v._v(" 原子性")]),v._v(" "),t("blockquote",[t("p",[v._v("一个事务必须被视为"),t("strong",[v._v("不可分割")]),v._v("的最小工作单元，整个事务中的所有操作要么全部成功提交，要么全部失败回滚，对于一个事务来说，不可能只执行其中的部分操作，这就是事务的原子性。")])]),v._v(" "),t("p",[t("code",[v._v("回滚操作")]),v._v("可以保证操作的原子性。所谓回滚操作就是当发生错误异常或者显式的执行"),t("code",[v._v("rollback")]),v._v("语句时需要把数据还原到原先的模样，所以这时候就需要用到undo log来进行回滚，接下来看一下undo log在实现事务原子性时怎么发挥作用的")]),v._v(" "),t("h3",{attrs:{id:"undo-log-的生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undo-log-的生成"}},[v._v("#")]),v._v(" undo log 的生成")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2020/10/07/X8yptH3PqEVjbcU.png",alt:""}}),v._v("\n假设有两个表"),t("code",[v._v("bank")]),v._v(" 和 "),t("code",[v._v("finance")]),v._v("，表中原始数据如图所示，当进行插入，删除以及更新操作时生成的"),t("code",[v._v("undo log")]),v._v("如下面图所示：\n"),t("img",{attrs:{src:"https://i.loli.net/2020/10/07/CVz1LIJKsDMyA6t.png",alt:"截屏2020-10-07 下午3.22.34"}}),v._v("\n从上图可以了解到数据的变更都伴随着回滚日志的产生：")]),v._v(" "),t("ol",[t("li",[v._v("产生了被修改前数据(zhangsan,1000) 的回滚日志")]),v._v(" "),t("li",[v._v("产生了被修改前数据(zhangsan,0) 的回滚日志\n根据上面流程可以得出如下结论：")]),v._v(" "),t("li",[v._v("每条数据变更（"),t("code",[v._v("insert")]),v._v("/"),t("code",[v._v("update")]),v._v("/"),t("code",[v._v("delete")]),v._v("）操作都伴随一条undo log的生成，并且回滚日志必须"),t("strong",[v._v("先于")]),v._v("数据持久化到磁盘上")]),v._v(" "),t("li",[v._v("所谓的回滚就是根据回滚日志做逆向操作\n"),t("ul",[t("li",[t("code",[v._v("delete")]),v._v("的逆向操作为"),t("code",[v._v("insert")])]),v._v(" "),t("li",[t("code",[v._v("insert")]),v._v("的逆向操作为"),t("code",[v._v("delete")])]),v._v(" "),t("li",[t("code",[v._v("update")]),v._v("的逆向为update等。")])])])]),v._v(" "),t("h3",{attrs:{id:"根据undo-log-进行回滚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据undo-log-进行回滚"}},[v._v("#")]),v._v(" 根据undo log 进行回滚")]),v._v(" "),t("p",[v._v("为了做到同时成功或者失败，当系统发生错误或者执行"),t("code",[v._v("rollback")]),v._v("操作时需要根据undo log 进行回滚\n"),t("img",{attrs:{src:"https://i.loli.net/2020/10/07/i43aZ5n9AtWsmFP.png",alt:""}}),v._v("\n回滚操作就是要还原到原来的状态，undo log记录了数据被修改前的信息以及新增和被删除的数据信息，根据undo log生成回滚语句，比如：")]),v._v(" "),t("ol",[t("li",[v._v("如果在回滚日志里有"),t("strong",[v._v("新增")]),v._v("数据记录，则生成"),t("strong",[v._v("删除")]),v._v("该条的语句")]),v._v(" "),t("li",[v._v("如果在回滚日志里有"),t("strong",[v._v("删除")]),v._v("数据记录，则生成"),t("strong",[v._v("新增")]),v._v("该条的语句")]),v._v(" "),t("li",[v._v("如果在回滚日志里有"),t("strong",[v._v("修改")]),v._v("数据记录，则生成"),t("strong",[v._v("修改")]),v._v("到原先数据的语句")])]),v._v(" "),t("h2",{attrs:{id:"持久性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久性"}},[v._v("#")]),v._v(" 持久性")]),v._v(" "),t("blockquote",[t("p",[v._v("事务一旦提交，其所做的修改会永久保存到数据库中，此时即使系统崩溃，修改的数据也不会丢失。")])]),v._v(" "),t("p",[v._v("在保证操作原子性之后，还是不能放心地"),t("code",[v._v("commit")]),v._v("。还得接着解决"),t("strong",[v._v("持久性")]),v._v("的问题。\n不过在这之前，得先了解一下MySQL的数据存储机制。MySQL的表数据是存放在磁盘上的，因此想要存取的时候都要经历磁盘IO，然而即使是使用SSD磁盘IO也是非常消耗性能的。\n为了提升性能，InnoDB提供了"),t("strong",[v._v("缓冲池")]),v._v("（Buffer Pool)，Buffer Pool中包含了磁盘数据页的"),t("strong",[v._v("映射")]),v._v("，可以当做缓存来使用：")]),v._v(" "),t("ul",[t("li",[v._v("读数据：会首先从缓冲池中读取，如果缓冲池中没有，则从磁盘读取在放入缓冲池；")]),v._v(" "),t("li",[v._v("写数据：会首先写入缓冲池，缓冲池中的数据会定期同步到磁盘中；\n上面这种缓冲池的措施虽然在性能方面带来了质的飞跃，但是它也带来了新的问题，当MySQL系统"),t("strong",[v._v("宕机")]),v._v("，断电的时候可能会丢数据。因为我们的数据已经提交了，但此时是在缓冲池里，还没来得及在磁盘持久化，所以我们急需一种机制需要存一下已提交事务的数据，为恢复数据使用。\n于是 "),t("code",[v._v("redo log")]),v._v("就派上用场了。下面看下redo log是什么时候产生的\n"),t("img",{attrs:{src:"https://i.loli.net/2020/10/07/hpoE8bXvCdrMmYl.png",alt:""}}),v._v("\n既然redo log也需要存储，也涉及磁盘IO为啥还用它？")])]),v._v(" "),t("ol",[t("li",[v._v("redo log 的存储是"),t("strong",[v._v("顺序存储")]),v._v("，而缓存同步是"),t("strong",[v._v("随机操作")]),v._v("。")]),v._v(" "),t("li",[v._v("缓存同步是以"),t("strong",[v._v("数据页")]),v._v("为单位的，每次传输的数据大小大于redo log。")])]),v._v(" "),t("h2",{attrs:{id:"隔离性实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隔离性实现"}},[v._v("#")]),v._v(" 隔离性实现")]),v._v(" "),t("blockquote",[t("p",[v._v("通常来说，一个事务所做的修改在最终提交以前，对其他事务是不可见的。")])]),v._v(" "),t("p",[v._v("隔离性是事务"),t("code",[v._v("ACID")]),v._v("特性里最复杂的一个。在SQL标准里定义了"),t("code",[v._v("四种隔离级别")]),v._v("，每一种级别都规定一个事务中的修改，哪些是事务之间可见的、哪些是不可见的。通常，越低的隔离级别可以执行越高的并发，同时实现复杂度以及开销也越低。\nMySQL 隔离级别有以下四种（级别由低到高）：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("READ UNCOMMITED")]),v._v(" (未提交读)")]),v._v(" "),t("li",[t("code",[v._v("READ COMMITED")]),v._v(" (提交读)")]),v._v(" "),t("li",[t("code",[v._v("REPEATABLE READ")]),v._v(" (可重复读)")]),v._v(" "),t("li",[t("code",[v._v("SERIALIZABLE")]),v._v(" (可串行化)\n只要彻底理解了隔离级别以及他的实现原理就相当于理解了"),t("code",[v._v("ACID")]),v._v("里的隔离性。前面说过原子性，隔离性，持久性的目的都是为了要做到一致性。但隔离性跟其他两个有所区别：原子性和持久性是为了提供数据的可靠性保障，比如要做到宕机后的恢复，以及错误后的回滚。")])]),v._v(" "),t("blockquote",[t("p",[v._v("那么"),t("strong",[v._v("隔离性")]),v._v("是要做到什么呢？")])]),v._v(" "),t("p",[v._v("隔离性是要管理多个并发读写请求的"),t("strong",[v._v("访问顺序")]),v._v("。\n⼀个事务的执⾏不能被其他事务⼲扰，即⼀个事务内部的操作及使⽤的数据对并发的其他事务是隔离的，并发执⾏的各个事务之间不能互相⼲扰。\n"),t("img",{attrs:{src:"https://i.loli.net/2020/10/07/hb9xjtLmly5SAMe.png",alt:""}}),v._v("\n总之，从隔离性的实现可以看出这是一场数据的可靠性与性能之间的权衡。")]),v._v(" "),t("ul",[t("li",[v._v("可靠性高的，并发性能低（比如 Serializable）")]),v._v(" "),t("li",[v._v("可靠性低的，并发性能高（比如 Read Uncommited）")])]),v._v(" "),t("h3",{attrs:{id:"read-uncommitted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-uncommitted"}},[v._v("#")]),v._v(" READ UNCOMMITTED")]),v._v(" "),t("p",[v._v("在"),t("code",[v._v("READ UNCOMMITTED")]),v._v("隔离级别下，事务中的修改即使还没提交，对其他事务是可见的。事务可以读取未提交的数据，造成"),t("strong",[v._v("脏读")]),v._v("。\n好处是可以提升一定程度的并发处理性能，做到读写并行。但是会导致很多的问题，而且性能并不会比其他级别好很多多，还缺乏其他级别的很多优点。所以除非真的必要，否则一般很少使用。")]),v._v(" "),t("ul",[t("li",[v._v("优点：读写并行，性能高")]),v._v(" "),t("li",[v._v("缺点：造成脏读")])]),v._v(" "),t("h3",{attrs:{id:"read-committed-大部分数据库系统默认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-committed-大部分数据库系统默认"}},[v._v("#")]),v._v(" READ COMMITTED（大部分数据库系统默认）")]),v._v(" "),t("blockquote",[t("p",[v._v('一个事务开始时，只能"看见" 已经提交的事务所做的修改。换句话说，一个事务从开始知道提交之前，所做的任何修改对其他事务都是不可见的。')])]),v._v(" "),t("p",[v._v("InnoDB在该隔离级别（READ COMMITTED）写数据时使用排他锁, 读数据则不加锁，换用了MVCC机制。 这样就可以大大提高并发读写效率, 写不影响读（读写分离)。 此外，因为读并未加锁, 读的是记录的镜像版本。\n但是该级别会产生"),t("strong",[v._v("不可重读")]),v._v("（在一个事务内多次读取的结果不一样）以及"),t("strong",[v._v("幻读")]),v._v("问题。\n这跟 READ COMMITTED 级别下的MVCC机制有关系，在该隔离级别下每次 select的时候新生成一个版本号，所以每次select的时候读的不是一个副本而是不同的副本。\n在每次select之间有其他事务更新了我们读取的数据并提交了，那就出现了不可重复读\n"),t("img",{attrs:{src:"/Users/wuxiaoqi/Desktop/MarkDown/MySQL/_image/2020-09-13/2020-09-13-18-59-17.png",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"repeatable-read-mysql默认隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repeatable-read-mysql默认隔离级别"}},[v._v("#")]),v._v(" REPEATABLE READ（Mysql默认隔离级别）")]),v._v(" "),t("blockquote",[t("p",[v._v("解决了脏读的问题。该级别保证了在同一个事物中多次读取同样记录的结果是一致的。\n但理论上，可重复读隔离级别还是无法解决另一个问题——"),t("strong",[v._v("幻读")])])]),v._v(" "),t("p",[v._v("所谓"),t("strong",[v._v("幻读")]),v._v("，指的是当某个事务在读取某个范围内的记录时，另外一个事务又在该范围内插入了新的纪录，当之前的事务再次读取该范围的纪录时，就产生了"),t("strong",[v._v("幻行")]),v._v("。")]),v._v(" "),t("p",[v._v("mysql 有两种机制可以达到这种隔离级别的效果，分别是采用读写锁以及MVCC。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("采用读写锁实现：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2021/01/06/A5furoR3qvsePgO.png",alt:"2020-09-13-19-05-07"}})]),v._v(" "),t("p",[v._v("为什么能可重复读？只要没释放读锁，再次读的时候还是可以读到第一次读的数据。")]),v._v(" "),t("ul",[t("li",[v._v("优点：实现起来简单")]),v._v(" "),t("li",[v._v("缺点：无法做到读写并行")])])]),v._v(" "),t("li",[t("p",[v._v("采用MVCC实现：\n"),t("img",{attrs:{src:"https://i.loli.net/2021/01/06/yoTnbLgz6cYfZQV.png",alt:""}}),v._v("\n为什么能可重复度？因为多次读取只生成一个版本，读到的自然是相同数据。")]),v._v(" "),t("ul",[t("li",[v._v("优点：读写并行")]),v._v(" "),t("li",[v._v("缺点：实现的复杂度高")])])])]),v._v(" "),t("h3",{attrs:{id:"serializable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serializable"}},[v._v("#")]),v._v(" SERIALIZABLE")]),v._v(" "),t("p",[v._v("最高的隔离级别。强制事务串行执行，避免了幻读的问题。\n该隔离级别理解起来最简单，实现也最单。在隔离级别下除了不会造成数据不一致问题，没其他优点。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2021/01/06/o6mYKpqW2574RvO.png",alt:"2020-09-13-19-08-55"}})]),v._v(" "),t("h2",{attrs:{id:"一致性的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一致性的实现"}},[v._v("#")]),v._v(" 一致性的实现")]),v._v(" "),t("blockquote",[t("p",[v._v("数据库总是从一个一致性的状态转换到另一个一致性的状态。")])]),v._v(" "),t("p",[v._v("下面举个例子:zhangsan 从银行卡转400到理财账户")]),v._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("start")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("select")]),v._v(" balance "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("from")]),v._v(" bank "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("where")]),v._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v('"zhangsan"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 生成 重做日志 balance=600")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("update")]),v._v(" bank "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("set")]),v._v(" balance "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" balance "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 生成 重做日志 amount=400")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("update")]),v._v(" finance "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("set")]),v._v(" amount "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" amount "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("+")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br"),t("span",{staticClass:"line-number"},[v._v("7")]),t("br")])]),t("ol",[t("li",[v._v("假如执行完 "),t("code",[v._v("update bank set balance = balance - 400;")]),v._v("之后发生异常了，银行卡的钱也不能平白无辜的减少，而是回滚到最初状态。")]),v._v(" "),t("li",[v._v("又或者事务提交之后，缓冲池还没同步到磁盘的时候宕机了，这也是不能接受的，应该在重启的时候恢复并持久化。")]),v._v(" "),t("li",[v._v("假如有并发事务请求的时候也应该做好事务之间的可见性问题，避免造成脏读，不可重复读，幻读等。在涉及并发的情况下往往在性能和一致性之间做平衡，做一定的取舍，所以隔离性也是对一致性的一种破坏。\n"),t("img",{attrs:{src:"https://i.loli.net/2021/01/06/KhQCkDlezZj7rOb.png",alt:""}})])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("本文讲了Mysql的事务的实现原理。实现事务采取了哪些技术以及思想。")]),v._v(" "),t("ul",[t("li",[v._v("原子性：使用 undo log ，从而达到回滚")]),v._v(" "),t("li",[v._v("持久性：使用 redo log，从而达到故障后恢复")]),v._v(" "),t("li",[v._v("隔离性：使用锁以及MVCC,运用的优化思想有读写分离，读读并行，读写并行")]),v._v(" "),t("li",[v._v("一致性：通过回滚，以及恢复，和在并发环境下的隔离做到一致性。")])])])}),[],!1,null,null,null);_.default=o.exports}}]);